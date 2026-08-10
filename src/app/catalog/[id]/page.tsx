import RoomClient from './RoomClient';
import { scenes } from '../../../lib/tour/scenes';

export default async function CatalogDetail({ params }: { params: Promise<{ id: string }> | { id: string } }){
  const resolvedParams = await params as { id: string };
  const id = resolvedParams.id;
  const scene = scenes[id];

  if (!scene) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-2xl font-bold mb-4">Not found</h1>
          <p className="text-gray-600">Room &quot;{id}&quot; tidak ditemukan. Tersedia: {Object.keys(scenes).join(', ')}</p>
        </main>
      </div>
    );
  }

  return <RoomClient scene={scene} />;
}
