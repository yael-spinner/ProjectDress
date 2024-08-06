import { useEffect, useState } from "react";
import { DressType } from "../types/dress.type";
import { getAllDress } from "../services/dress.service";
import DressCard from "./DressCard";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectDress } from "../redux/dress/dress.selectors";

export default function Catalog() {
    const [dresses, setDresses] = useState<DressType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dresses = await getAllDress();
                setDresses(dresses);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);
    // const dresses:DressType[] = useSelector(selectDress);
    return (
        <div style={{ paddingTop: '20px', paddingBottom: '120px',paddingLeft:'1%' }}>
            {dresses ? (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    {dresses.map((dress, index) => (
                        <div key={dress.id} >
                            <DressCard dress={dress} />
                        </div>
                    ))}
                </div>
            ) : (
                <LinearProgress />
            )}
        </div>
    );
}
