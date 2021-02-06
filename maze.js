let maze = document.querySelector(".maze");
let ctx  = maze.getContext("2d");

class Maze
{
    constructor( space, rows, columns )
    {
        this.space   =   space;
        this.rows    =   rows;
        this.columns =   columns;
        this.grid    =   [];       // Produces Maze.
        this.stack   =   [];
    }
}

class Cell
{
    constructor( row, column, grid, space )
    {
        this.row     = row;
        this.column  = column;
        this.grid    = grid;
        this.space   = space;
        this.visited = false;
        this.walls   =
        {
            topWall      :       true,
            rightWall    :       true,
            bottomWall   :       true,
            leftWall     :       true,

        }
    }
}