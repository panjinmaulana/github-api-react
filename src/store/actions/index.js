// Thunk function
export function fetchData(searchInput) {
    return (dispatch) => {
        fetch(`https://api.github.com/users/${searchInput}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "FETCH_USER", payload: data });
                return fetch(`https://api.github.com/users/${searchInput}/repos`);
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "FETCH_REPOS", payload: data });
            })
            .catch((err) => console.log(err));
    };
};