import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // Optionally handle the result here (e.g., save user info)
    console.log('User signed in:', result.user);
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    alert('Failed to sign in with Google. Please try again.');
  }
};

export { auth };
