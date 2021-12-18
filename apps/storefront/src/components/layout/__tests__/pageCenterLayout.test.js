import { mount } from '@vue/test-utils'
import PageCenterLayout from '../PageCenterLayout.vue'

test('Displays PageCenterLayout', () => {
  const wrapper = mount(PageCenterLayout, {
    slots: {
      header: 'Header Content',
      default: 'Main Content',
      footer: 'Footer Content'
    }
  })
  
  expect(wrapper.classes()).toContain('vl_page-center')
  expect(wrapper.html()).toContain('Header Content')
  expect(wrapper.html()).toContain('Main Content')
  expect(wrapper.html()).toContain('Footer Content')
})

