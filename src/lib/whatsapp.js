import { brand } from '../data/site'

// Monta um link wa.me com o número oficial da AliCria e uma mensagem
// pré-preenchida de acordo com o contexto do botão que originou o clique.
export function whatsappLink(message) {
  return `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(message)}`
}
