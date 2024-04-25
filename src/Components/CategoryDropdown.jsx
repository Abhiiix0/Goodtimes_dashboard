import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { getCategory } from "../Api/Api";

const { Option } = Select;

const CategoryDropdown = ({ onSelectCategory }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategory();
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Check if data.categories is an array before setting state
          if (Array.isArray(data?.category)) {
            setCategory(data.category);
          } else {
            console.error("Categories data is not an array:", data);
          }
        } else {
          console.error("Failed to fetch categories:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (onSelectCategory) {
      onSelectCategory(value);
    }
  };

  return (
    <Select
      placeholder="Select a category"
      loading={loading}
      value={selectedCategory}
      onChange={handleCategoryChange}
      style={{ width: 200 }}
    >
      {category.map((category) => (
        <Option key={category?._id} value={category?._id}>
          {category?.name}
        </Option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
