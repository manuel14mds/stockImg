import { db } from "@/app/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";

const getImages = async () => {
    const imagesCol = collection(db, 'images');
    const imageSnapshot = await getDocs(imagesCol);
    const imageList = imageSnapshot.docs.map(doc => ({
        id: doc.id, // Extrae el ID del documento
        ...doc.data() // Combina el ID con los datos del documento
    }));
    return imageList;
}

// Función para subir la imagen
const uploadImage = async (file, title) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${title}`);
    
    // Subir archivo
    await uploadBytes(storageRef, file);
    
    // Obtener URL de descarga
    const url = await getDownloadURL(storageRef);
    return url;
};

// endpoints
export async function GET() {
    const response = await getImages()
    return NextResponse.json(response)
}


export async function POST(request) {
    const data = await request.json()
    const responseImg = await uploadImage(data.file, data.titulo)
    console.log(responseImg)
    return NextResponse.json('ok')
}