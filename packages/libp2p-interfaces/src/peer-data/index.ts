import type { PeerId } from '../peer-id'
import type { Multiaddr } from '@multiformats/multiaddr'

export interface PeerData {
  id: PeerId
  multiaddrs: Multiaddr[]
  protocols: string[]
}
