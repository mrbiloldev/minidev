import React, { Component } from "react";
// import "./styles.scss";
// https://codepen.io/AlexBalaushko/pen/mdepQzo
import styles from './carousel.module.css'
import { AiOutlineUp, AiOutlineCheck } from "react-icons/ai";
import AOS from "aos";

export class CarouselCircle extends Component {
    state = {
        carouselDeg: 17,
        itemDeg: -17,
        centerItem: 0,
        prevItem: 9,
        lastItem: 9,
        nextItem: 1,
        carousel: [
            { name: "Java", id: 0, position: 1, icons: <AiOutlineCheck /> },
            { name: "PHP", id: 1, position: 2, icons: <AiOutlineCheck /> },
            { name: "C#", id: 2, position: 3, icons: <AiOutlineCheck /> },
            { name: "C++", id: 3, position: 4, icons: <AiOutlineCheck /> },
            { name: "C", id: 4, position: 5, icons: <AiOutlineCheck /> },
            { name: "Python", id: 5, position: 6, icons: <AiOutlineCheck /> },
            { name: "Swift", id: 6, position: 7, icons: <AiOutlineCheck /> },
            { name: "JavaScript", id: 7, position: 8, icons: <AiOutlineCheck /> },
            { name: "Ios", id: 8, position: 9, icons: <AiOutlineCheck /> },
            { name: "Go", id: 9, position: 10, icons: <AiOutlineCheck /> }
        ]
    };

    getIdItems = side => {
        // true = next, false = prev
        const { nextItem, prevItem, lastItem } = this.state;

        if (side) {
            this.setState(
                {
                    centerItem: nextItem
                },
                () => prevNext(this.state.centerItem)
            );
        } else {
            this.setState(
                {
                    centerItem: prevItem
                },
                () => prevNext(this.state.centerItem)
            );
        }

        const prevNext = itemId => {
            if (itemId === lastItem) {
                this.setState({
                    nextItem: 0,
                    prevItem: lastItem - 1
                });
            } else if (itemId === 0) {
                this.setState({
                    prevItem: lastItem,
                    nextItem: 1
                });
            } else {
                this.setState(state => ({
                    nextItem: state.centerItem + 1,
                    prevItem: state.centerItem - 1
                }));
            }
        };
    };

    next = () => {
        this.getIdItems(true);
        this.setState(state => ({
            carouselDeg: state.carouselDeg - 36,
            itemDeg: state.itemDeg + 36
        }));
    };

    prev = () => {
        this.getIdItems(false);
        this.setState(state => ({
            carouselDeg: state.carouselDeg + 36,
            itemDeg: state.itemDeg - 36
        }));
    };

    getCssClass = id => {
        const { centerItem, nextItem, prevItem } = this.state;

        if (id === centerItem) {
            return "active";
        } else if (id === nextItem) {
            return "next";
        } else if (id === prevItem) {
            return "prev";
        }
    };
    render() {
        AOS.init({
            duration: 1000
        });
        return (
            <div className={styles.Container}>
                <div className={styles.BoxInfo} data-aos="fade-right">
                    <p>Dasturlash
                        tillarini tanlang</p>
                    <p>Bu yerda bizda mavjud bo'lgan kurslar ruyhati. Bu kurslarimiz sizlar uchun mutloqa tekin, bizning maqsadimiz sizlarga sifatli va tekin ta'lim berishdan iborat.</p>

                </div>
                <div className={styles.Data}>
                    <div className={styles.test} data-aos="fade-up">
                        <div
                            className={styles.carousel} data-aos="fade-up"
                            style={{ transform: `rotate(${this.state.carouselDeg}deg)` }}
                        >
                            {this.state.carousel.map((item, index) => (
                                <div
                                    className={`${styles.item_carousel} ${this.getCssClass(index)}`}
                                    key={item.id}
                                    id={item.id}
                                    style={{ transform: `rotate(${this.state.itemDeg}deg)` }}
                                >
                                    <p>{item.name}</p>
                                    <p>{item.icons}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.Main}>

                    <div className={styles.ClickBtn}>
                        <p onClick={this.prev}><AiOutlineUp /></p>
                        <p onClick={this.next}><AiOutlineUp /></p>

                    </div>
                </div>

            </div>
        );
    }
}

export default CarouselCircle;
