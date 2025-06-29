import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const submitContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
}; 