import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      category: "Starters",
      items: [
        {
          name: "Tomato Soup",
          description: "Warm, creamy tomato soup with herbs.",
          price: "₹120",
          image: "https://www.kuchpakrahahai.in/wp-content/uploads/2023/10/Roasted-tomato-garlic-soup.jpg",
        },
        {
          name: "Spring Rolls",
          description: "Crispy vegetable rolls served with spicy dip.",
          price: "₹150",
          image: "https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg",
        },
        {
          name: "Paneer Tikka",
          description: "Grilled paneer cubes marinated in Indian spices.",
          price: "₹200",
          image: "https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg",
        },
        {
          name: "Greek Salad",
          description: "Fresh vegetables with olives and feta cheese.",
          price: "₹180",
          image: "https://www.zimbokitchen.com/wp-content/uploads/2020/07/GREEN-SALAD-II.jpg",
        },
      ],
    },
    {
      category: "Snacks",
      items: [
        {
          name: "Samosa",
          description: "Crispy pastry filled with spiced potatoes.",
          price: "₹50",
          image: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
        },
        {
          name: "Masala Fries",
          description: "Spicy seasoned potato fries.",
          price: "₹100",
          image: "https://mymorningmocha.com/wp-content/uploads/2024/03/masala-chips-recipe.jpg",
        },
        {
          name: "Veg Sandwich",
          description: "Grilled sandwich with fresh veggies and cheese.",
          price: "₹150",
          image: "https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900",
        },
        {
          name: "Cheese Nachos",
          description: "Crispy nachos topped with melted cheese.",
          price: "₹200",
          image: "https://www.tastyrewards.com/sites/default/files/2024-01/Ultimate%20Four%20Cheese%20Nachos.jpg",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Paneer Butter Masala",
          description: "Rich and creamy curry made with paneer.",
          price: "₹250",
          image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
        },
        {
          name: "Veg Biryani",
          description: "Aromatic rice cooked with spices and vegetables.",
          price: "₹200",
          image: "https://images.getrecipekit.com/20211124220241-veg-20biryani.jpg?aspect_ratio=1:1&quality=90&auto_optimize=medium",
        },
        {
          name: "Dal Makhani",
          description: "Slow-cooked lentils in a creamy tomato sauce.",
          price: "₹180",
          image: "https://sinfullyspicy.com/wp-content/uploads/2015/03/1200-by-1200-images-1.jpg",
        },
        {
          name: "Butter Naan",
          description: "Soft Indian bread topped with butter.",
          price: "₹50",
          image: "https://fullofplants.com/wp-content/uploads/2023/05/Homemade-Naan-Bread-Restaurant-Style-Vegan-thumb-1-500x375.jpg",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          description: "Soft dumplings soaked in sugar syrup.",
          price: "₹80",
          image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail.jpg",
        },
        {
          name: "Chocolate Brownie",
          description: "Fudgy brownie topped with chocolate sauce.",
          price: "₹150",
          image: "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/14416-chocolate-brownie.jpg?v=1-0",
        },
        {
          name: "Rasmalai",
          description: "Creamy milk-based dessert with soft dumplings.",
          price: "₹120",
          image: "https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg",
        },
        {
          name: "Ice Cream Sundae",
          description: "Scoops of ice cream topped with nuts and syrup.",
          price: "₹180",
          image: "https://thumbs.dreamstime.com/b/ice-cream-sundae-whipped-cherry-white-background-304519458.jpg",
        },
      ],
    },
    {
      category: "Cold Drinks",
      items: [
        {
          name: "Mango Shake",
          description: "Fresh mango blended with milk and sugar.",
          price: "₹120",
          image: "https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-Thumbnail.jpg",
        },
        {
          name: "Lemon Iced Tea",
          description: "Refreshing lemon-flavored iced tea.",
          price: "₹90",
          image: "https://static.toiimg.com/thumb/84339280.cms?imgsize=327880&width=800&height=800",
        },
        {
          name: "Cold Coffee",
          description: "Chilled coffee with a hint of sweetness.",
          price: "₹150",
          image: "https://wholefully.com/wp-content/uploads/2021/06/homemade-iced-mocha-coffee-735x1103.jpg",
        },
        {
          name: "Coke Float",
          description: "Classic cola with a scoop of vanilla ice cream.",
          price: "₹100",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvIIaU6v3G7SK_7gbzHBFsbAnIasE_GiuZA&s",
        },
      ],
    },
  ];

  const handleOrderNow = (item) => {
    navigate("/custom", { state: { item } });
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our delicious and diverse offerings.</p>
      </header>

      <div className="menu-categories">
        {menuItems.map((category, index) => (
          <section key={index} className="menu-category">
            <h2>{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                  <button onClick={() => handleOrderNow(item)}>Order Now</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    
  );
};

export default Menu;
