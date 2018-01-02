import { mount } from 'avoriaz'
import List from '@/components/List'

describe('List.vue', () => {
  it('displays items from the list', () => {
    const ListComponent = mount(List)
    expect(ListComponent.text()).to.contain('play games')
  })
  it('adds a new item to list on click with avoriaz', () => {
    /** OLD WAY */
    // const Construcor = Vue.extend(List)
    // const ListComponent = new Construcor().$mount()

    const ListComponent = mount(List)
    // OLD set the input value
    // ListComponent.newItem = 'sleep'

    // set the input value
    ListComponent.setData({
      newItem: 'brush my teeth'
    })
    // OLD get the button
    // const button = ListComponent.$el.querySelector('button')

    // OLD simulate click Event
    // const clickEvent = new window.Event('click')
    // button.dispatchEvent(clickEvent)
    // ListComponent._watcher.run()

    // simulate click event
    const button = ListComponent.find('button')[0]
    button.trigger('click')

    // assert list contains new item
    expect(ListComponent.text()).to.contain('brush my teeth')
    expect(ListComponent.data().listItems).to.contain('brush my teeth')
  })
})
