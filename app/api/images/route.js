import { db } from "@/app/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';
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

const saveImageData = async (imageData) => {
    const docRef = await addDoc(collection(db, "images"), imageData);
    return docRef.id; // Retorna el ID del nuevo documento
}

const createImgInfo = (data, imageUrl) => {
    return {
        downloadsCount: 2,
        author: "manuel florez",
        priceBase: 15,
        description: data.descripcion,
        active: true,
        url: imageUrl,
        viewsCount: 50,
        title: data.titulo,
        category: "painting",
        albumRef: "none",
        rating: 53.2,
        licenseType: "standard",
        available: true,
        keywords: ["naturaleza", "bosque", "otoño"],
        size: "400mb",
        subscription: "subscripción 1"
    }
}

// endpoints
export async function GET() {
    const response = await getImages()
    return NextResponse.json(response)
}


export async function POST(request) {
    const data = await request.json()

    const imgInfo = createImgInfo({ titulo: data.titulo, descripcion: data.descripcion }, data.imageURL)
    const imgId = await saveImageData(imgInfo)

    return NextResponse.json(imgId)
}