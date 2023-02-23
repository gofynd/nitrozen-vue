import { mount } from '@vue/test-utils';
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
      },
    });
    const rows = wrapper.findAll('.n-zebra-table');
    expect(rows).toHaveLength(tabRow.length / 2);
    expect(rows.at(0).contains('.n-zebra-table')).toBe(true);
  });

  it('Should Render show columnborder', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        columnBorder: true,
      },
    });

    const rows = wrapper.findAll('.n-table-left-border');
    expect(rows).toHaveLength(tabRow.length * 2);
    expect(rows.at(0).contains('.n-table-left-border')).toBe(true);
  });

  it('Should Contain Footer', () => {
    const wrapper = mount(NTable, {
      propsData: {
        tableHeader: tabHeader,
        tableRow: tabRow,
        condensed: false,
        isFooter: true,
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
      },
    });
    expect(wrapper.find('footer').exists()).toBe(false);
    const condensedrows = wrapper.findAll('.n-table-condensed');
    expect(condensedrows.at(0).contains('.n-table-condensed')).toBe(true);
  });

  it('Should render the checkbox table', () => {
    const wrapper = mount(NTable, {
        propsData:{
            tableHeader: tabHeader,
            tableRow: tabRow,
            checkAble: true
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
            checkAble: false
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
