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