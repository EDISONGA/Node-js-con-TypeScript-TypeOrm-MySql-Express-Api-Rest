"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tbl_persona = void 0;
var typeorm_1 = require("typeorm");
var sector_1 = require("./sector");
var zona_1 = require("./zona");
var tbl_persona = /** @class */ (function () {
    function tbl_persona() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], tbl_persona.prototype, "cod_persona", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_persona.prototype, "nom_persona", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_persona.prototype, "fec_nacimiento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_persona.prototype, "cod_sector", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return sector_1.tbl_sector; }, function (cod_sectors) { return cod_sectors.cod_sector; }),
        typeorm_1.JoinColumn({ name: "cod_sector" }),
        __metadata("design:type", sector_1.tbl_sector)
    ], tbl_persona.prototype, "cod_sectors", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_persona.prototype, "cod_zona", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return zona_1.tbl_zona; }, function (cod_zonas) { return cod_zonas.cod_zona; }),
        typeorm_1.JoinColumn({ name: "cod_zona" }),
        __metadata("design:type", zona_1.tbl_zona)
    ], tbl_persona.prototype, "cod_zonas", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], tbl_persona.prototype, "sueldo", void 0);
    tbl_persona = __decorate([
        typeorm_1.Entity()
    ], tbl_persona);
    return tbl_persona;
}());
exports.tbl_persona = tbl_persona;
