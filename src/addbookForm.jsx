import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  // État du formulaire
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('Fantasy');
  const [rating, setRating] = useState('');
  
  // État des erreurs de validation
  const [errors, setErrors] = useState({
    title: '',
    author: '',
    publicationYear: '',
    rating: ''
  });

  // Fonction pour valider les champs
  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Le titre est obligatoire';
    if (!author) newErrors.author = 'L\'auteur est obligatoire';
    if (!publicationYear || publicationYear <= 1500) newErrors.publicationYear = 'L\'année doit être supérieure à 1500';
    if (!rating || rating < 1 || rating > 5) newErrors.rating = 'La note doit être entre 1 et 5';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Si aucune erreur, on peut soumettre
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      // Créer un nouvel objet livre
      const newBook = {
        title,
        author,
        publicationYear,
        genre,
        rating: parseFloat(rating)
      };
      
      // Ajouter le livre au tableau de livres via le parent
      onAddBook(newBook);
      
      // Réinitialiser le formulaire
      setTitle('');
      setAuthor('');
      setPublicationYear('');
      setGenre('Fantasy');
      setRating('');
      setErrors({});
    }
  };

  // Fonction pour réinitialiser le formulaire
  const handleReset = () => {
    setTitle('');
    setAuthor('');
    setPublicationYear('');
    setGenre('Fantasy');
    setRating('');
    setErrors({});
  };

  return (
    <div>
      <h2>Ajouter un livre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        
        <div>
          <label>Auteur</label>
          <input 
            type="text" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)} 
          />
          {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
        </div>
        
        <div>
          <label>Année de publication</label>
          <input 
            type="number" 
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)} 
          />
          {errors.publicationYear && <p style={{ color: 'red' }}>{errors.publicationYear}</p>}
        </div>

        <div>
          <label>Genre</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Fantasy">Fantasy</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Classic">Classic</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Philosophical Fiction">Philosophical Fiction</option>
          </select>
        </div>

        <div>
          <label>Note</label>
          <input 
            type="number" 
            value={rating}
            onChange={(e) => setRating(e.target.value)} 
            min="1" max="5" 
          />
          {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
        </div>

        <button type="submit">Ajouter</button>
        <button type="button" onClick={handleReset}>Réinitialiser</button>
      </form>
    </div>
  );
}

export default AddBookForm;
