import React, { Component } from 'react';

class MainInfos extends Component {

  componentDidMount() {

  }

  render() {
    return (
        <div className="centerpad">
            <div className="main-infos">
                <div className="main-infos__left">
                    <div className="main-infos__item">
                        <div className="main-infos__type">Role</div>
                        <div className="main-infos__value">Role value</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">Date</div>
                        <div className="main-infos__value">Date value</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">What</div>
                        <div className="main-infos__value">What value</div>
                    </div>
                    <div className="main-infos__item">
                        <div className="main-infos__type">Agency</div>
                        <div className="main-infos__value">Agency value</div>
                    </div>
                </div>
                <div className="main-infos__right">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</div>
            </div>
        </div>
    );
  }
}

export default MainInfos;
