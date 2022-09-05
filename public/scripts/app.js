class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
    this.searchBtn = document.getElementById("searchBtn");
  }

  async init() {
    await this.load();

    // Register click listener
    this.searchBtn.onclick = this.filterCar;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-lg-4", "py-3");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;

      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add("col-lg-4", "py-3");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  };

  filterCar = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }

    let tipeDriver = document.getElementById("tipeDriver").value;
    let tanggalRental = document.getElementById("tanggalRental").value;
    let waktuJemput = document.getElementById("waktuJemput").value;
    let jumlahPenumpang = document.getElementById("jumlahPenumpang").value;
    let dateRent = tanggalRental + "T" + waktuJemput;
    let formDate = Date.parse(dateRent);

    Car.list.forEach((car) => {
      let dateRenting = Date.parse(car.availableAt);
      let dateTime = car.availableAt;
      let time = dateTime.toLocaleTimeString();

      let tempdate = JSON.stringify(car.availableAt);
      let tempdate2 = tempdate.split("T");
      let tempdate3 = tempdate2[0].replace('"', "");

      if (
        jumlahPenumpang <= car.capacity &&
        tipeDriver == car.available &&
        time >= waktuJemput &&
        tempdate3 >= tanggalRental
      ) {
        if (dateRenting >= formDate) {
          const node = document.createElement("div");
          node.classList.add("col-lg-4", "py-3");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
        if (tipeDriver == car.available) {
          const node = document.createElement("div");
          node.classList.add("col-lg-4", "py-3");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
      } else if (tipeDriver == "null" && jumlahPenumpang <= car.capacity) {
        if (
          dateRenting >= formDate ||
          (time >= timeValue && tempdate3 >= tanggalRental)
        ) {
          const node = document.createElement("div");
          node.classList.add("col-lg-4", "py-3");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
      }
    });
  };
}
