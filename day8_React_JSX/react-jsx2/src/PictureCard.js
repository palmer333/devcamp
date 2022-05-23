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
        like: 99,
        comment: 15,
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
        like: 88,
        comment: 13,
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
        like: 102,
        comment: 13,
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
        like: 68,
        comment: 14,
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
        like: 64,
        comment: 14,
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
        like: 74,
        comment: 5,
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
        like: 100,
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
        like: 79,
        comment: 8,
    },
];

const css = {
    display: "inline-block",
    width: "24%",
    margin: "0.5%",
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
    return <div style={{justifyContent:"center"}}>{message}</div>;
};

export default PictureCard;