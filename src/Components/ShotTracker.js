import React, { useState } from 'react';
import ShotList  from './ShotList';

const ShotTracker = () => {
    const [shots, setShots] = useState([]);

    const trackShot = (shot) => {
        setShots([...shots, shot]);
    }

    const calculateAverageDistance = () => {
        let clubAverages = {};
        shots.forEach((shot) => {
            if(!clubAverages[shot.club]) {
                clubAverages[shot.club] = {
                    distance: Number(shot.distance),
                    count: 1
                };
            } else {
                clubAverages[shot.club].distance += Number(shot.distance);
                clubAverages[shot.club].count += 1;
            }
        });

        Object.keys(clubAverages).forEach((club) => {
            Number((clubAverages[club].distance /= clubAverages[club].count).toFixed(1));
        });

        return clubAverages;
    }

    return (
        <div>
            <input type="text" placeholder="Club" id="club" />
            <input type="number" placeholder="Distance" id="distance" />
            <button onClick={() => {
                const club = document.getElementById('club').value;
                const distance = Number(document.getElementById('distance').value);
                trackShot({ club, distance });
            }}>Track Shot</button>
            <ShotList clubAverages={calculateAverageDistance()} />
        </div>
    )
};
export default ShotTracker;
