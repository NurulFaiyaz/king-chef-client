import { useEffect, useState } from "react";


const useMenu = () => {
    const [menus, setMenus] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5500/menus')
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setLoading(false)
            })
    }, [])
    console.log(menus)
    return [menus, loading]
};

export default useMenu;