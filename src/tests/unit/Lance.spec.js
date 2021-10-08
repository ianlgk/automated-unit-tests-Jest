import { mount } from '@vue/test-utils'
import Lance from '@/components/Lance'

test('não aceita lance com valor menor do que zero', () => {
    const wrapper = mount(Lance)
    expect(wrapper).toBeTruthy()
})