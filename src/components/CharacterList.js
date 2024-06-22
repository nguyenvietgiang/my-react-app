import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/apiService";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/CharacterList.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const charactersPerPage = 10; // Số nhân vật hiển thị trên mỗi trang

  useEffect(() => {
    getCharacters()
      .then((response) => {
        const results = response.data;
        setCharacters(results.results);
        setTotalPages(Math.ceil(results.info.pages / charactersPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Hàm xử lý thay đổi trang
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * charactersPerPage;
  const currentCharacters = characters.slice(
    offset,
    offset + charactersPerPage
  );

  // Hàm xử lý khi bấm vào ảnh
  const handleCharacterClick = (characterId) => {
    navigate(`/CharacterDetail/${characterId}`); // Chuyển hướng đến trang chi tiết nhân vật
  };
  // sử lý tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Gọi API với giá trị tìm kiếm
    getCharacters(searchTerm)
      .then((response) => {
        const results = response.data.results;
        setCharacters(results);
        setTotalPages(Math.ceil(results.length / charactersPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="character-list">
      <div className="search-area">
        <form onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search characters"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="character-grid">
        {currentCharacters.map((character) => (
          <div
            key={character.id}
            className="character-item"
            onClick={() => handleCharacterClick(character.id)} // Gọi hàm handleCharacterClick khi bấm vào ảnh
          >
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break"
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default CharacterList;
