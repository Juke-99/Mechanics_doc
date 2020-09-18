<style scoped>
  footer {
    padding: 0;
    margin: 0;
  }

  section {
    margin-top: 88px;
  }

  h1 {
    text-align: center;
  }

  p {
    line-height: 25px;
    letter-spacing: 1px;
    margin-bottom: 25px;
  }

  footer {
    padding: 5px 12px;
    margin-top: 120px;
    font-size: 12px;
    color: white;
    border-top: black solid 0.05em;
    background-color: #999;
  }

  footer p {
    line-height: 15px;
    margin-bottom: 13px;
  }

  .main {
    width: 80%;
    max-width: 870px;
    margin: auto;
  }

  .text-center {
    text-align: center;
  }
</style>

<template>
  <div class="main">
    <p class="text-center">Chapter 1</p>
    <article>
      <h1>運動方程式</h1>

      <section>
        <h2>一般化座標</h2>

        <div>
          <p>
            力学の基本的な概念の1つは<b>粒子</b><sup><a href="#particle">1</a></sup>である。これにより、次元が運動の記述を無視する体を意味する。
            もちろん、そうすることの可能性は、関係する問題の調整に依存する。
            例えば、惑星は太陽に関する運動として考えられる粒子としてみなすことができるが、軸に関しての回転として考えることは
            できない。
          </p>

          <p>
            空間内の粒子の位置は半径ベクトル$r$によって定義される。成分はデカルト座標$x, y, z$である。時間$t$に関する$r$の
            導関数$v = dr/dt$は粒子の<i>速度</i>と呼ばれ、2番目の導関数$d^2{r}/dt^2$は<b>加速度</b>と呼ばれる。次は
            、慣習的に、文字の上にドットを付けることで時間に関係する微分を表す：$v = \dot{r}$。
          </p>

          <p>
            空間内の$N$粒子の系の位置を定義するために、$N$半径ペクトル（すなわち$3N$座標）を特定する必要がある。任意の系の
            位置を独自に定義するために指定されるはずの独自の数量は<b>自由度</b>の数と呼ばれる。ここで、この数は$3N$。これらの量は
            粒子のデカルト座標である必要はなく、問題の座標はより便利な座標のいくつかの選択を描画する。$s$自由度によって
            系の位置を完全な定義をする任意の$s$量$q_1, q_2, ..., q_s$は系の<b>一般化座標</b>と呼ばれ、導関数$\dot{q}_i$
            は<b>一般化速度</b>と呼ばれる。
          </p>

          <p>
            一般化座標の値が特定されるとき、考えられる瞬間での系の”力学的な状態”はそのあとすぐに系の位置が予測できる方法のように
            まだ決められない。座標の与えられた値について、系が任意の速度を持つことができ、微小な時間間隔$dt$の後の系の位置に
            影響する。
          </p>

          <p>
            もしすべての座標と速度が同時に特定されるなら、系の状態が完全に決定され、そのあとの運動が、原理的に、計算することができる
            ということが実験から知られる<sup><a href="#acceleration">2</a></sup>。数学的に、この意味は、もしすべての座標$q$と速度$\dot{q}$がいくつかの瞬間に与えられたなら、
            瞬間での加速度$\ddot{q}$は独自に定義される。
          </p>

          <p>
            加速度、速度、座標との関係は<b>運動方程式</b>と呼ばれる。2階微分は関数$q(t)$と等しく、積分は、原則として、
            これらの関数の決定、したがって系の経路の決定が可能になる。
          </p>
        </div>
      </section>

      <section>
        <h2>最小原理の法則</h2>

        <div>
          <p>
            力学的な系の運動を統合する法則のもっとも一般的な公式は、あらゆる力学系が明確な関数
            $L(q_1, q_2, ..., q_s, \dot{q}_1, \dot{q}_2, ..., \dot{q}_s, t)$、もしくは簡単に$L(q, \dot{q}, t)$
            によって特徴づけられ、系の運動がデカルト座標を満たす、
            <b>最小原理の法則</b>もしくは<b>ハミルトンの原理</b>である。
          </p>

          <p>
            微小$t_1$と$t_2$で、系が座標の二つの集合の値（$q^{(1)}$と$q^{(2)})$で定義した位置を占めるとする。その時、座標は
            積分
            $$
            \tag{2.1} S = \int^{t_s}_{t_1} L(q, \dot{q}, t)dt
            $$
            可能な最小値を取ってくる方法で位置の間で系が動く<sup><a href="#lagrangian">3</a></sup>。関数$L$は構成する系の<b>ラグラジアン</b>と呼ばれ、積分$(2.1)$は
            <b>作用</b>と呼ばれる。
          </p>

          <p>
            ラグラジアンは$q$と$\dot{q}$で成り立つが、より高い次元の微分$\ddot{q}$、$\dddot{q}$などでは成り立たないという事実
            があり、すでに言及された結果を表す。系の力学的な状態は座標と速度が与えられたときに完全に定義される。
          </p>

          <p>
            積分$(2.1)$の最小化の問題を解決する微分方程式を導出してみる。簡単に、系が1つの自由度をもつことを初めに想定する。
            1つの関数$q(t)$が決めること。
          </p>

          <p>
            $q = q(t)$は$S$が最小値である関数であるとする。これは$q(t)$が式
            $$
            \tag{2.2} q(t) + \delta q(t)
            $$
            の関数によって取り換えられるときに増加する$S$であるという意味。$\delta q(t)$は$t_1$から$t_2$までの時間の間での
            小さいあらゆる場所である関数。$\delta q(t)$は<b>変動</b>と呼ばれる。なので、$t = t_1$と$t = t_2$によって、
            すべての関数$(2.2)$は値$q^{(1)}$と$q^{(2)}$を取り、
            $$
            \tag{2.3} \delta q(t_1) = \delta q(t_2) = 0
            $$
            を導く。
          </p>

          <p>
            $q$が$q + \delta q$に取り換えるときの$S$の変化は
            $$
            \int_{t_1}^{t_2}L(q + \delta q, \dot{q} + \delta \dot{q}, t)dt - \int_{t_1}^{t_2}L(q , \dot{q}, t)dt
            $$
          </p>

          <p>
            この差分が積分の$\delta q$と$\delta \dot{q}$で拡張されるとき、導いている項は一つ目の順序である。極小値<sup><a href="#minimum">4</a></sup>
            を持つための$S$の必要条件は（積分の<b>第一変分</b>、もしくは<b>変分</b>と呼ばれる）これらの条件が0であること。したがって最小原理の法則は公式
            $$
            \tag{2.4} \delta S = \delta \int_{t_1}^{t_2}L(q, \dot{q}, t)dt = 0
            $$
            もしくは、変分をして、
            $$
            \int_{t_1}^{t_2}\bigg(\frac{\partial L}{\partial q}\delta q + \frac{\partial L}{\partial \dot{q}}\delta \dot{q}\bigg)dt = 0
            $$
            で書かれる。
          </p>

          <p>
            $\delta \dot{q} = d\delta q/dt$なので、2番目の項を積分することで、
            $$
            \tag{2.5} \delta S = \bigg[\frac{\partial L}{\partial q}\delta q\bigg]_{t_1}^{t_2} + \int_{t_1}^{t_2}\bigg(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}}\bigg) \delta q dt = 0
            $$
            を得る。
          </p>

          <p>
            条件$(2.3)$は$(2.5)$の積分した項が0であることを示す。$\delta q$の全ての値を消す積分を残す。もし積分が0なら、することができる。したがって
            $$
            \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = 0
            $$
            を持つ。
          </p>

          <p>
            系が一つ以上の自由度を持つとき、$s$個の異なる関数$q_i(t)$は最小作用の法則で独自に変化される。
            公式
            $$
            \tag{2.6} \frac{d}{dt}\bigg(\frac{\partial L}{\partial \dot{q}_i}\bigg) - \frac{\partial L}{\partial q_i} = 0　(i = 1,2,...,s)
            $$
            の$s$個の等式を明らかに得る。
          </p>

          <!-- <p></p> -->
        </div>
      </section>
    </article>

    <footer>
      <p id="particle">
        1. たまに、ロシア語で<b>質点</b>と呼ばれることがある。
      </p>

      <p id="acceleration">
        2. 簡単に、全ての座標$q_1, q_2, ..., q_s$の集合の$q$と同時に全ての速度の集合の$\dot{q}$によってよく従来通り示す。
      </p>

      <p id="lagrangian">
        3. この最小原理の法則の公式が系の全体の経路で常に有効ではないが、経路の十分短い切片でもないということが維持されるべき。
        全体の経路の積分$(2.1)$は極大値を持つが、極小値を持つ必要はない。しかし、この事実は運動の等式の微分として重要ではない。なので、
        唯一の最大値の条件は使われる。
      </p>

      <p id="minimum">
        4. もしくは、一般的に、極大値。
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    const katex = require('katex');
    document.addEventListener("DOMContentLoaded", function() {
      renderMathInElement(document.body, {delimiters: [
        {left: "\\[", right: "\\]", display: true},
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ]});
    });
  }
}
</script>