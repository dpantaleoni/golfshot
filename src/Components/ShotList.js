
const ShotList = ({ clubAverages }) => {
    if (!clubAverages) {
        return null
    }
    return (
        <div>
            <ul>
                {Object.keys(clubAverages).map((club) => {
                    return <li key={club}>{club}: {clubAverages[club].distance}</li>
                })}
            </ul>
        </div>
    )
}

export default ShotList;