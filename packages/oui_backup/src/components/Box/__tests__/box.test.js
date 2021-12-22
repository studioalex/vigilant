import { mount } from '@vue/test-utils'
import Box from '../Box.vue'

test('Displays box', () => {
  const wrapper = mount(Box, {
    slots: {
      default: 'Main Content'
    }
  })

  expect(wrapper.classes()).toContain('oui-box')
  expect(wrapper.classes()).toContain('oui-box--medium')
  expect(wrapper.classes()).toContain('oui-box--surface-3th')
  expect(wrapper.classes()).toContain('oui-box--shadow')
  expect(wrapper.html()).toContain('Main Content')
})

test('Displays box with custom properties', () => {
  const wrapper = mount(Box, {
    props: {
      size: 'small',
      shadow: false,
      surface: '4th'
    },
    slots: {
      default: 'Custom Content'
    }
  })
  expect(wrapper.classes()).toContain('oui-box')
  expect(wrapper.classes()).toContain('oui-box--small')
  expect(wrapper.classes()).toContain('oui-box--surface-4th')
  expect(wrapper.classes()).not.toContain('oui-box--shadow')
  expect(wrapper.html()).toContain('Custom Content')
})
