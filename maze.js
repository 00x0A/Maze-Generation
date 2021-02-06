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


    drawTopWall( x, y, space, rows, columns )
    {
        ctx.beginPath();
        ctx.moveTo( x, y );
        ctx.lineTo( x + space/columns, y );
        ctx.stroke();
    }
    
    drawRightWall( x, y, space, rows, columns )
    {
        ctx.beginPath();
        ctx.moveTo( x + space/columns, y);
        ctx.lineTo( x + space/columns, y + space/rows )
        ctx.stroke();
    }

    show( space, rows, columns )
    {
        let x = ( this.column * space ) / columns;
        let y = ( this.row    * space ) / rows;

        ctx.fillStyle   = "#1f1f1f";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth   = 1;

        if (this.walls.topWall)     this.drawTopWall( x, y, space, rows, columns );
        if (this.walls.rightWall)   this.drawRightWall( x, y, space, rows, columns );
        if (this.walls.bottomWall)  this.drawBottomWall( x, y, space, rows, columns );
        if (this.walls.leftWall)    this.drawLeftWall( x, y, space, rows, columns );

        if (this.visited)  ctx.fillRect( x, y, space/rows, space/columns );
    }
}