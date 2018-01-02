import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {
  it('displays items from the list', () => {
    const Construcor = Vue.extend(List)
    const ListComponent = new Construcor().$mount()
    expect(ListComponent.$el.textContent).to.contain('play games')
  })
})
