export const PROPERTY = {
  name: 'The Meridian Residence',
  address: 'Jl. Kemang Raya No. 12, Jakarta Selatan',
};

export const scenes: Record<string, any> = {
  FirstRoom: {
    id: 'FirstRoom',
    title: 'FirstRoom',
    image: '/panorama/room1.jpeg',
    thumbnail: '/panorama/room1.jpeg',
    floorplan: { x: 60, y: 25 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-secondroom', type: 'nav', target: 'SecondRoom', yaw: '22deg', pitch: '12deg', label: 'Room2' }
    ],
  },

  SecondRoom: {
    id: 'SecondRoom',
    title: 'SecondRoom',
    image: '/panorama/room2.jpeg',
    thumbnail: '/panorama/room2.jpeg',
    floorplan: { x: 20, y: 42 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-firstroom', type: 'nav', target: 'FirstRoom', yaw: '48deg', pitch: '-40deg', label: 'Room1' }
    ],
  },

  bedroom: {
    id: 'bedroom',
    title: 'Bedroom',
    image: '/panorama/test.jpg',
    thumbnail: '/panorama/test.jpg',
    floorplan: { x: 50, y: 52 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-bathroom', type: 'nav', target: 'bathroom', yaw: '42deg', pitch: '-9deg', label: 'Bathroom' },
      { id: 'to-kitchen', type: 'nav', target: 'kitchen', yaw: '145deg', pitch: '-7deg', label: 'Kitchen' },
      { id: 'to-livingroom', type: 'nav', target: 'livingroom', yaw: '262deg', pitch: '-7deg', label: 'Living Room' },
      { id: 'info-ac', type: 'info', yaw: '8deg', pitch: '22deg', label: 'Air Conditioner', description: 'Split-type AC, 1 PK, dengan remote timer & sleep mode.' },
      { id: 'info-tv', type: 'info', yaw: '324deg', pitch: '0deg', label: 'Smart TV', description: '43" Smart TV terpasang di dinding, Netflix & YouTube siap pakai.' },
    ],
  },

  bathroom: {
    id: 'bathroom',
    title: 'Bathroom',
    image: '/panorama/bathroom.jpg',
    thumbnail: '/panorama/bathroom.jpg',
    floorplan: { x: 18, y: 22 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-bedroom', type: 'nav', target: 'bedroom', yaw: '0deg', pitch: '-9deg', label: 'Bedroom' },
      { id: 'info-heater', type: 'info', yaw: '210deg', pitch: '10deg', label: 'Water Heater', description: 'Pemanas air instan, panas stabil dalam 15 detik.' },
    ],
  },

  kitchen: {
    id: 'kitchen',
    title: 'Kitchen',
    image: '/panorama/kitchen.jpg',
    thumbnail: '/panorama/kitchen.jpg',
    floorplan: { x: 18, y: 82 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-bedroom', type: 'nav', target: 'bedroom', yaw: '0deg', pitch: '-9deg', label: 'Bedroom' },
      { id: 'info-kulkas', type: 'info', yaw: '100deg', pitch: '-4deg', label: 'Refrigerator', description: 'Kulkas 2 pintu, 300L, hemat energi bintang 4.' },
      { id: 'info-stove', type: 'info', yaw: '250deg', pitch: '-6deg', label: 'Stove', description: 'Kompor tanam 2 tungku + cooker hood.' },
    ],
  },

  livingroom: {
    id: 'livingroom',
    title: 'Living Room',
    image: '/panorama/living-room.jpg',
    thumbnail: '/panorama/living-room.jpg',
    floorplan: { x: 82, y: 52 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-balcony', type: 'nav', target: 'balcony', yaw: '58deg', pitch: '-6deg', label: 'Balcony' },
      { id: 'to-bedroom', type: 'nav', target: 'bedroom', yaw: '222deg', pitch: '-8deg', label: 'Bedroom' },
      { id: 'info-tv', type: 'info', yaw: '338deg', pitch: '2deg', label: 'Smart TV', description: '55" Smart TV dengan soundbar 2.1 channel.' },
    ],
  },

  balcony: {
    id: 'balcony',
    title: 'Balcony',
    image: '/panorama/balcony.jpg',
    thumbnail: '/panorama/balcony.jpg',
    floorplan: { x: 97, y: 52 },
    defaultView: { yaw: '0deg', pitch: '0deg', fov: 70 },
    hotspots: [
      { id: 'to-livingroom', type: 'nav', target: 'livingroom', yaw: '180deg', pitch: '-6deg', label: 'Living Room' },
    ],
  },
};

export const sceneOrder = ['bedroom', 'bathroom', 'kitchen', 'livingroom', 'balcony'];
export const DEFAULT_SCENE = 'bedroom';

export function getAdjacentSceneIds(sceneId: string) {
  const scene = scenes[sceneId];
  if (!scene) return [];
  return scene.hotspots.filter((h: any) => h.type === 'nav').map((h: any) => h.target);
}
