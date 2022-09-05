class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card">
      <img src="${this.image}" class="card-img-top"  width="330"
      height="220">
      <div class="card-body">
        <p>${this.manufacture} / ${this.plate}</p>
        <p>${this.description}</p>
        <p><span><img src="./icon/fi_users.png"></span> ${this.capacity} Orang</p>
        <p><span><img src="./icon/fi_settings.png"></span> ${this.transmission}</p>
        <p><span><img src="./icon/fi_calendar.png"></span> Tahun ${this.year}</p>
        <a href="#" class="btn btn-success">Pilih Mobil</a>
      </div>
    </div>
    `;
  }
}
