import React, { useState } from 'react';

// ---------- Inline CSS Styles ----------
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fef9f4',
    minHeight: '100vh',
    color: '#2d2d2d',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px 0',
    borderBottom: '3px solid #e67e22',
  },
  title: {
    fontSize: '2.8rem',
    color: '#d35400',
    margin: '0 0 10px 0',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    margin: 0,
    fontWeight: '400',
  },
  classGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '28px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #f0e6dc',
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
  },
  imagePlaceholder: {
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3.5rem',
    backgroundColor: '#fdebd0',
    borderBottom: '2px solid #fad7a0',
  },
  cardContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  className: {
    fontSize: '1.4rem',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#2c3e50',
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginBottom: '12px',
    fontWeight: '500',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#555',
    marginBottom: '20px',
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  price: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#e67e22',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e67e22',
    color: 'white',
    border: 'none',
    borderRadius: '40px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    outline: 'none',
  },
  buttonHover: {
    backgroundColor: '#d35400',
  },
  buttonBooked: {
    backgroundColor: '#27ae60',
    cursor: 'default',
  },
  bookingSection: {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: '#fff5e6',
    borderRadius: '20px',
    border: '1px solid #fad7a0',
    textAlign: 'center',
  },
  bookingTitle: {
    fontSize: '1.8rem',
    color: '#d35400',
    marginBottom: '15px',
  },
  bookingList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  bookingItem: {
    backgroundColor: 'white',
    padding: '12px 24px',
    borderRadius: '40px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    fontWeight: '500',
    color: '#2c3e50',
    border: '1px solid #f0e6dc',
  },
  emptyMessage: {
    color: '#7f8c8d',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
};

// ---------- Cooking Class Data ----------
const cookingClasses = [
  {
    id: 1,
    name: 'Italian Pasta Masterclass',
    emoji: '🍝',
    duration: '2.5 hours',
    level: 'Beginner',
    description:
      'Learn to make fresh tagliatelle, ravioli, and classic sauces from scratch with Chef Marco.',
    price: 49,
  },
  {
    id: 2,
    name: 'Sushi Rolling Workshop',
    emoji: '🍣',
    duration: '3 hours',
    level: 'Intermediate',
    description:
      'Master the art of sushi rice, rolling maki, and crafting perfect nigiri with Chef Yuki.',
    price: 65,
  },
  {
    id: 3,
    name: 'French Pastry Basics',
    emoji: '🥐',
    duration: '4 hours',
    level: 'Beginner',
    description:
      'Croissants, pain au chocolat, and éclairs — learn laminated dough and pastry cream.',
    price: 75,
  },
  {
    id: 4,
    name: 'Thai Street Food',
    emoji: '🍜',
    duration: '2 hours',
    level: 'All levels',
    description:
      'Pad Thai, green curry, and som tam. Bold flavors and quick wok techniques.',
    price: 55,
  },
  {
    id: 5,
    name: 'Vegan & Gluten-Free Baking',
    emoji: '🌱',
    duration: '2.5 hours',
    level: 'Intermediate',
    description:
      'Delicious plant-based cakes, cookies, and breads without gluten or dairy.',
    price: 60,
  },
  {
    id: 6,
    name: 'Knife Skills 101',
    emoji: '🔪',
    duration: '1.5 hours',
    level: 'Beginner',
    description:
      'Chop, dice, julienne, and mince like a pro. Safety, speed, and precision.',
    price: 39,
  },
];

// ---------- Component ----------
const CookingClasses = () => {
  const [bookedClasses, setBookedClasses] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleBook = (classItem) => {
    if (!bookedClasses.includes(classItem.id)) {
      setBookedClasses([...bookedClasses, classItem.id]);
    }
  };

  const getBookedNames = () => {
    return cookingClasses
      .filter((c) => bookedClasses.includes(c.id))
      .map((c) => `${c.emoji} ${c.name}`);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🍳 Cooking Classes</h1>
        <p style={styles.subtitle}>
          Hands-on workshops with professional chefs — book your spot today!
        </p>
      </header>

      {/* Class Cards Grid */}
      <div style={styles.classGrid}>
        {cookingClasses.map((item) => {
          const isBooked = bookedClasses.includes(item.id);
          const isCardHovered = hoveredCard === item.id;
          const isButtonHovered = hoveredButton === item.id;

          return (
            <div
              key={item.id}
              style={{
                ...styles.card,
                ...(isCardHovered ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Emoji image placeholder */}
              <div style={styles.imagePlaceholder}>{item.emoji}</div>

              {/* Card content */}
              <div style={styles.cardContent}>
                <h3 style={styles.className}>{item.name}</h3>

                <div style={styles.meta}>
                  <span>⏱️ {item.duration}</span>
                  <span>📊 {item.level}</span>
                </div>

                <p style={styles.description}>{item.description}</p>

                <div style={styles.footer}>
                  <span style={styles.price}>${item.price}</span>
                  <button
                    style={{
                      ...styles.button,
                      ...(isBooked ? styles.buttonBooked : {}),
                      ...(isButtonHovered && !isBooked ? styles.buttonHover : {}),
                    }}
                    onClick={() => handleBook(item)}
                    disabled={isBooked}
                    onMouseEnter={() => setHoveredButton(item.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    {isBooked ? '✓ Booked' : 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Summary Section */}
      <section style={styles.bookingSection}>
        <h2 style={styles.bookingTitle}>📋 Your Bookings</h2>
        {bookedClasses.length === 0 ? (
          <p style={styles.emptyMessage}>
            No classes booked yet. Click "Book Now" on any class above!
          </p>
        ) : (
          <ul style={styles.bookingList}>
            {getBookedNames().map((name, index) => (
              <li key={index} style={styles.bookingItem}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default CookingClasses;