import { useEffect } from 'react'

const RenameSkuLabels = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('span.skuSelectorName')

    spans.forEach((span) => {
      const text = span.textContent?.trim()

      switch (text) {
        case 'colour':
          span.textContent = 'Texto 1'
          break
        case 'Cor':
          span.textContent = 'Texto 2'
          break
        case 'Color':
          span.textContent = 'Texto 3'
          break
        default:
          break
      }
    })
  }, [])

  return null // esse componente não renderiza nada visível
}

export default RenameSkuLabels
