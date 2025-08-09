import { useState } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mp3') {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    } else {
      setAudioFile(null);
      setAudioUrl('');
      alert('Please select an MP3 file.');
    }
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center my-10'>Simple Music Player</h1>
      <div className='flex flex-col items-center justify-center'>
        <input 
          type='file' 
          accept='audio/mp3' 
          onChange={handleFileChange}
          className='mb-4'
        />
        {audioUrl && <AudioPlayer src={audioUrl} />}
      </div>
    </div>
  );
}