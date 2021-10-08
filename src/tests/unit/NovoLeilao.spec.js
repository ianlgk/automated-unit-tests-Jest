import { mount } from '@vue/test-utils'
import NovoLeilao from '@/views/NovoLeilao'
import { createLeilao } from '@/http'

jest.mock('@/http')

const $router = {
    push: jest.fn()
}

describe('um novo leilao deve ser criado', () => {
    test('dado o formulario preenchido, um leilao deve ser criado', () => {
        createLeilao.mockResolvedValueOnce()

        const wrapper = mount(NovoLeilao, {
            mocks: {
                $router
            }
        })

        wrapper.find('.produto').setValue('Livro - VueJs')
        wrapper.find('.descricao').setValue('VueJs para iniciantes')
        wrapper.find('.valor').setValue(50)
        wrapper.find('form').trigger('submit')

        expect(createLeilao).toHaveBeenCalled()
    })
})