
const db = require("../config/database");

class School {
  static async create(name, address, latitude, longitude) {
    const [result] = await db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute("SELECT * FROM schools");
    return rows;
  }

  static calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }

  static deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  static async findNearbySchools(userLat, userLon) {
    const [schools] = await db.execute("SELECT * FROM schools");
    return schools
      .map((school) => ({
        ...school,
        distance: this.calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
  }
}

module.exports = School;
