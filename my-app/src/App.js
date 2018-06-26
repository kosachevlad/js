import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest_block"> Отдых </div>
      )
  } else {
    return (
      <div className="work_block"> А ну работать! </div>
      )

  }
}

// Создаем новый экземпляр Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()} // Инициализируем положение с Date
  }
// Вызываем метод, который в свою очередь вызывает tick каждую секунду
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
      )
  }
// Если таймер вдруг исчезнет - скрипт остановится
  compomentWillUnmount() {
    clearInterval(this.timerId)
  }
// Обновляем положение с Date методом setState()
  tick() {
    this.setState({
      date: new Date()
    })
  }

// Рендеринг DOM - структуры
  render() {
    return (
        <div>
          <ShowBanner time={this.state.date.getSeconds()} />
          <h1> Текущее время {this.state.date.toLocaleTimeString()} </h1>
        </div>
      )
  }
}

export default Clock;
