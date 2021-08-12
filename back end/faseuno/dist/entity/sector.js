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
exports.tbl_sector = void 0;
var typeorm_1 = require("typeorm");
var persona_1 = require("./persona");
var zona_1 = require("./zona");
var tbl_sector = /** @class */ (function () {
    function tbl_sector() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        typeorm_1.OneToMany(function () { return zona_1.tbl_zona; }, function (cod_sector) { return cod_sector.cod_sector; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], tbl_sector.prototype, "cod_sector", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return persona_1.tbl_persona; }, function (cod_sectors) { return cod_sectors.cod_sector; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], tbl_sector.prototype, "cod_sectors", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_sector.prototype, "des_sector", void 0);
    tbl_sector = __decorate([
        typeorm_1.Entity()
    ], tbl_sector);
    return tbl_sector;
}());
exports.tbl_sector = tbl_sector;
