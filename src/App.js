// import logo from './logo.svg';
import './App.css';
import brownie from './choc-brownie.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <h3>Desserts</h3> */}
          <h3 class="baby-shower-theme">Kate and Modassar's Baby Shower</h3>
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
        <div class="wrapper">
          <div class="navigation"></div>
          {/* Do Grid layout of Recipe card, mobile first design */}
          <div class="recipe recipe-title">
            <h2 class="heading recipe-name">Almond Flour Chocolate Brownies</h2>
          </div>
          <div class="recipe recipe-image">
            <img
              src={brownie}
              alt="chocolate brownie slices"
              class="recipe-pic"
            ></img>
          </div>
          <div class="recipe recipe-description">
            {' '}
            These are easy, fudgey yet cakey and SO DELICIOUS. You'd have no
            idea they're grain free, dairy free, and can be made vegan! Can be
            done by hand, with an electric mixer or Thermomix.
          </div>
          <div class="recipe recipe-ingredients">
            <h3 class="secondary-heading">Ingredients</h3>
            <h4 class="tertiary-heading">Wet:</h4>
            <ul>
              <li>
                1 cup runny almond butter{' '}
                <em>(can sub for tahini, any nut butter, or half of each)</em>
              </li>
              <li>
                1/4 cup coconut sugar{' '}
                <em>(1/2 cup if like it sweeter) (can sub for brown sugar)</em>
              </li>
              <li>1/3 cup maple syrup</li>
              <li>
                2 tbsp non-dairy milk <em>(I used almond)</em>
              </li>
              <li>
                2 tbsp oil <em>(I used melted coconut oil)</em>
              </li>
              <li>
                2 eggs or flax eggs{' '}
                <em>(works well either way, or one of each!)</em>
              </li>
              <li>1 tsp vanilla extract</li>
            </ul>
            <h4 class="tertiary-heading">Dry:</h4>

            <ul>
              <li>
                1/2 cup cocao powder <em>(or cocoa powder)</em>
              </li>
              <li>3/4 cup blanched almond flour</li>
              <li>1 tsp baking powder</li>
              <li>1/4 tsp sea salt</li>
            </ul>

            <h4 class="tertiary-heading">Optional:</h4>
            <ul>
              <li>1/4 cup chopped macadmania or pistachio nuts</li>
              <li>1/4 cup dark chocolate chips</li>
            </ul>
          </div>
          <div class="recipe recipe-instructions">
            <h3 class="secondary-heading">Instructions</h3>
            <ol>
              <li>Preheat the oven to 350&deg;F / 175&deg;C.</li>
              <li>In a large bowl, combine all wet ingredients.</li>
              <li>Whisk together until well combined. </li>
              <li>
                Add in all remaining dry ingredients and stir with a wooden
                spoon. The batter will be on the thicker side. Be sure to spoon
                and level the flour, don't scoop straight from the bag.
              </li>
              <li>
                Add the batter to an 8x8 pan lined with parchment paper. Spread
                evenly to cover all sides of the pan. It helps to use a rubber
                spatula for this step.
              </li>
              <li>
                Bake for 22-28 minutes (it will depend on your oven) or until a
                toothpick comes out clean, 25 minutes is perfect in my oven. If
                you prefer fudgier brownies, bake for closer to 20 minutes, for
                more well come brownies, bake closer to 28.
              </li>
              <li>
                Let cool completely before slicing. They tend to fall apart if
                you cut them prematurely, so really try to wait a good 20-30
                minutes before slicing* (though longer is even better)! They
                hold up really well as long as they're cool when sliced :) You
                can always heat them up in the microwave after they're sliced if
                you want to enjoy them warm.
              </li>
            </ol>
          </div>
          <div class="recipe recipe-notes">
            <div class="notes">
              <h4 class="tertiary-heading">Notes:</h4>
              <p>
                The eggs can be subbed for 2 flax eggs. To make, combine 1 tbsp
                ground flax seeds (for every 1 egg and you need 2 for this
                recipe) with 2.5 tbsp of water. Combine and let sit for 10
                minutes to thicken. I actually like to make this recipe with 1
                egg and 1 flax egg. The texture turns out really well this way!
              </p>
              <p>
                The chocolate drizzle is made from 1/4 cup chocolate chips plus
                2 tsp coconut oil. Add the chips and oil to a sauce pan and put
                the sauce pan in a larger pot with water (makeshift double
                burner) and melt over low heat.
              </p>
              <p>
                The very best almond butter is the raw almond butter. It has the
                best flavor and consistency for baking and works really well in
                this recipe.
              </p>
              <p>
                Do you ever cut into a brownie and have the top part start to
                crumble as you pull the knife away? Well, a good trick to
                prevent this is to use a slightly damp knife to cut the
                brownies. It sounds weird, but I promise it works and won't mess
                up the brownies! The key is to wipe the knife in between each
                slice if you want perfectly clean edges and ensure the knife is
                just damp, not really wet.
              </p>
            </div>
            {/* <div class="own-notes">Input areainput field area</div> */}
          </div>
          <div class="recipe recipe-source">
            {' '}
            <h3 secondary-heading>Source:</h3>{' '}
            <p>
              {' '}
              <b>Adapted from -</b> &nbsp;
              <a
                class="source-link"
                href="https://eatwithclarity.com/grain-free-brownies/"
                target="_blank"
              >
                https://eatwithclarity.com/grain-free-brownies
              </a>
            </p>
          </div>
        </div>
      </body>
      <footer>Built and designed by Kate Cherie</footer>
    </div>
  );
}

export default App;
