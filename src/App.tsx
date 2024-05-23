import { FC } from 'react';

const App: FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Game of Thrones Characters</h1>
            <label className="block mb-4">
                Filter by house:
                <select
                    className="ml-2 p-2 border border-gray-300 rounded"
                >
                    <option value="All">All</option>
                    <option value="Dragonstone">Dragonstone</option>
                    <option value="Casterly Rock">Casterly Rock</option>
                    <option value="Winterfell">Winterfell</option>
                    <option value="Dorne">Dorne</option>
                    <option value="Iron Islands">Iron Islands</option>
                </select>
            </label>
            <ul className="flex flex-col gap-4 p-0">
                <li
                    className="px-4 rounded-lg bg-gray-100 drop-shadow-lg border-gray-400 flex flex-col gap-1 p-2"
                    aria-label="Jon Snow"
                >
                    <div className="flex flex-row gap-2">
                        <span className="font-semibold" id="character-name">Name</span>
                        <span aria-labelledby="character-name">Jon Snow</span>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="font-semibold" id="character-house">House</span>
                        <span aria-labelledby="character-house">Stark</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default App;
