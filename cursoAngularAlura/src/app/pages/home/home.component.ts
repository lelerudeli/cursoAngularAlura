import { Component, OnInit } from "@angular/core";
import { PromocaoService } from "src/app/core/servicos/promocao.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private servicoPromocao: PromocaoService) {}

  ngOnInit(): void {
    this.servicoPromocao.listaPromocao()
      .subscribe((resposta) => {
        console.log(resposta);
    });
  }
}
