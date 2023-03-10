import { mount } from '@vue/test-utils';
import NitrozenUuid from '../../utils/NUuid';
import NTable from './NTable.vue';

const tabHeader = [
  {
    name: 'firstName',
    value: 'First name',
    width: '50%',
    sortable: true,
  },
  {
    name: 'lastName',
    value: 'Last name',
    width: '20%',
    sortable: false,
  },
  {
    name: 'age',
    value: 'Age',
    type: 'number',
    width: '100px',
    sortable: true,
  },
];

const tabRow = [
  {
    lastName: 'Yang',
    firstName: 'John',
    age: 45,
  },
  {
    lastName: 'Peterson',
    firstName: 'Robert',
    age: 16,
  },
  {
    lastName: 'Culley',
    firstName: 'Dana',
    age: 45,
  },
  {
    lastName: 'Giraudy',
    firstName: 'Rav',
    age: 150,
  },
];

describe('Render Table Component', () => {
  it('Should Render A Table', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        id: NitrozenUuid()
      },
    });
    expect(wrapper.props('tableHeader')).toBe(tabHeader);
    expect(wrapper.props('tableRow')).toBe(tabRow);
  });

  it('Should Render Zebra Table', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        isZebra: true,
        id: NitrozenUuid()
      },
    });
    const rows = wrapper.findAll('.n-zebra-table');
    expect(rows).toHaveLength(tabRow.length / 2);
    expect(rows.at(0).findComponent('.n-zebra-table').exists()).toBe(true);
  });

  it('Should Render show columnborder', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        columnBorder: true,
        id: NitrozenUuid()
      },
    });

    const rows = wrapper.findAll('.n-table-left-border');
    expect(rows).toHaveLength(tabRow.length * 2);
    expect(rows.at(0).findComponent('.n-table-left-border').exists()).toBe(true);
  });

  it('Should Contain Footer', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        condensed: false,
        isFooter: true,
        id: NitrozenUuid()
      },
    });
    expect(wrapper.find('footer').exists()).toBe(true);
    const condensedrows = wrapper.findAll('.n-table-condensed');
    expect(condensedrows).toHaveLength(0);
  });

  it('Should show condensed table', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        condensed: true,
        isFooter: false,
        id: NitrozenUuid()
      },
    });
    expect(wrapper.find('footer').exists()).toBe(false);
    const condensedrows = wrapper.findAll('.n-table-condensed');
    expect(condensedrows.at(0).findComponent('.n-table-condensed').exists()).toBe(true);
  });

  it('Should render the checkbox table', () => {
    const wrapper = mount(NTable, {
        propsData:{
            tableHeader: tabHeader,
            tableRow: tabRow,
            checkAble: true,
            id: NitrozenUuid()
        }
    })
    const checkbox = wrapper.findAll('.table-checkbox')
    expect(checkbox).toHaveLength(tabRow.length + 1);
  })

  it('Should render the normal table', () => {
    const wrapper = mount(NTable, {
        propsData:{
            tableHeader: tabHeader,
            tableRow: tabRow,
            checkAble: false,
            id: NitrozenUuid()
        }
    })
    const checkbox = wrapper.findAll('.table-checkbox')
    expect(checkbox).toHaveLength(0);
  })

  it('Should render the unsorted icon',  () => {
    const wrapper = mount(NTable, {
        propsData: {
            tableHeader: tabHeader,
            tableRow: tabRow,
            id: NitrozenUuid()
        }
    })
    const sortIcons = wrapper.findAll('.n-table-icon-left')
    expect(sortIcons).toHaveLength(2)
  })

  it('Should render the sorted icon',  () => {
    const wrapper = mount(NTable, {
        propsData: {
            tableHeader: tabHeader,
            tableRow: tabRow,
            id: NitrozenUuid()
        }
    })
    const sortIcons = wrapper.findAll('.n-table-icon-down')
    expect(sortIcons).toHaveLength(0)
  })

  it('Emit the onlclick even', async () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        id: NitrozenUuid()
      },
    })
    wrapper.vm.$emit('click', 1);
    wrapper.vm.$emit('getAllItems', tabRow);
    wrapper.vm.$emit('getSingleChecked', tabRow[0]);

    expect(wrapper.emitted().click[0]).toEqual([1]);
    expect(wrapper.emitted().getAllItems[0]).toEqual([tabRow]);
    expect(wrapper.emitted().getSingleChecked.length).toBe(1);
  });
});
