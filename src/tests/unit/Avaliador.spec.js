import { mount, RouterLinkStub } from '@vue/test-utils'
import Avaliador from '@/views/Avaliador'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const leiloes = [
    {
        produto: 'Livro da Casa do Código',
        lanceInicial: 50,
        descricao: 'Livro sobre VueJS'
    },
    {
        produto: 'Livro da Casa do Código',
        lanceInicial: 50,
        descricao: 'Livro sobre Teste Unitário'
    }
]

describe('Avaliador que se conecta com a API', () => {
    test('mostra todos os leiloes retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce(leiloes)

        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        await flushPromises()

        const totalDeLeiloesExibidos = wrapper.findAll('.leilao').length

        expect(totalDeLeiloesExibidos).toBe(leiloes.length)
    })
    test('nao há leiloes retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce([])

        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        await flushPromises()

        const totalDeLeiloesExibidos = wrapper.findAll('.leilao').length

        expect(totalDeLeiloesExibidos).toBe(0)
    })
})