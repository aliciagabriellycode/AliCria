import { radii } from './shapeRadii'

/** Forma decorativa (aria-hidden). A cor/tamanho vêm de className. */
export default function Shape({ kind = 'disc', className = '', style }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ borderRadius: radii[kind], ...style }}
    />
  )
}
