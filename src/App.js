import fsimage from './full-stack-web-development.jpg';

function App() {
  return (
    <div className="shadow-lg p-10">
      <h1 className="font-bold text-center p-5 text-3xl">
        Portfolio Assignment
      </h1>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src={fsimage}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Full Stack Development</div>
          <p class="text-gray-700 text-base">
          Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #developers
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #frontend
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #backend
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
