let today = new Date();

const pics = [
    {
        img: "https://picsum.photos/901",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 2,
        comment: 10,
    },
    {
        img: "https://picsum.photos/902",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 5,
        comment: 8,
    },
    {
        img: "https://picsum.photos/903",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 5,
        comment: 3,
    },
    {
        img: "https://picsum.photos/904",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 11,
        comment: 15,
    },
    {
        img: "https://picsum.photos/905",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 5,
        comment: 9,
    },
    {
        img: "https://picsum.photos/906",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 7,
        comment: 7,
    },
    {
        img: "https://picsum.photos/907",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 10,
        comment: 20,
    },
    {
        img: "https://picsum.photos/908",
        name: "Photo by unknown",
        date:
            today.getDate() +
            "-" +
            parseInt(today.getMonth() + 1) +
            "-" +
            today.getFullYear(),
        like: 1,
        comment: 2,
    },
];

const css = {
    display: "inline-block",
    width: "22%",
    margin: "1%",
    backgroundColor: "#ffdab9",
};

const link = {
    textDecoration: "none",
    color: "#bc4749",
};

const img = {
    maxWidth: "100%",
    borderRadius: "10px"
};


const message = pics.map((x, i) => {
    return (
        <div style={css} key={`pictures${i}`}>
            <div style={{ padding: "10px" }}>
                <a href="#">
                    <img style={img} src={x.img} alt={x.name} />
                </a>
            </div>
            <div style={{marginLeft:"15px"}}>
                <a href="#" style={link}><h3>{x.name}</h3></a>
                <a href="#" style={link}><h3>Date: {x.date}</h3></a>
                <a href="#" style={link}><h3>{x.like} likes</h3></a>
                <a href="#" style={link}><h3>{x.comment} comments</h3></a>
            </div>
        </div>
    );
});

const PictureCard = () => {
    return <div>{message}</div>;
};

export default PictureCard;