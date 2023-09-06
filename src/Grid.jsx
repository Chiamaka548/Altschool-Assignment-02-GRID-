import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((num) => {
        return (
          <div
            className="row"
            style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
          >
            {range(0, numCols).map((i) => {
              return <div className="col" style={{}}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
