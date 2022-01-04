// import logo from './logo.svg';
import '../static/css/reset.css';
import '../static/css/common.css';

function Portfolio() {
  return (
    <div className="App">
        <header>
            <nav class="header-menu">
            <ul>
                <li><a href="#top"><span>About</span></a></li>
                <li><a href="#a2"><span>portfolio</span></a></li>
            </ul>
            </nav>
        </header>
        <div class="mb">
            <p class="slide_txt on">
            <span>K</span>
            <span>I</span>
            <span>M</span>
            <span>J</span>
            <span>I</span>
            <span>E</span>
            <span>U</span>
            <span>N</span>
            </p>
        </div>
        <div class="cont01">
            <div class="inner">
                <div class="row justify-content-center">
                    <ul class="my-info">
                        <li>
                            <div>
                            <span>NAME</span>
                            <span>Kim Ji Eun</span>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span>Phone</span>
                            <span>010-1234-1234</span>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span>E-MAIL</span>
                            <span>test@gmail.com</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
