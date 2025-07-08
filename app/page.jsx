import React from "react";
import { Card, CardContent } from "./components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-bg/80 sticky top-0 z-50 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="NoobPrice Logo" className="h-10 w-10" />
          <span className="text-2xl font-extrabold text-primary">
            NoobPrice
          </span>
        </div>
        <a
          target="_blank"
          href="https://chromewebstore.google.com/detail/noob-price/edacconmaakjimmfgnblocblbcdcpbko"
          className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-md font-medium transition"
        >
          Experimentar
        </a>
      </nav>

      <main className="p-4 md:p-10 space-y-16">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            NoobPrice
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
            A extensão definitiva para gamers que querem economizar! Compare
            automaticamente os preços de jogos na Steam com as melhores lojas
            digitais do mercado.
          </p>
          <div className="mt-4">
            <a
              href="#features"
              className="bg-primary hover:bg-primary-hover px-6 py-3 rounded-md text-white font-semibold transition"
            >
              Saiba mais
            </a>
          </div>
        </section>

        <section id="features" className="space-y-10">
          <h2 className="text-3xl font-bold text-center">
            Por que usar o NoobPrice?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card text-white p-6 text-center space-y-4">
              <img
                src="/icon-compare.png"
                alt="Comparação"
                className="h-12 mx-auto"
              />
              <h3 className="text-xl font-semibold">
                Comparação em tempo real
              </h3>
              <p className="text-white/70">
                Veja os preços atualizados de diversas lojas assim que você
                entra na página do jogo.
              </p>
            </Card>

            <Card className="bg-card text-white p-6 text-center space-y-4">
              <img
                src="/icon-money.png"
                alt="Economia"
                className="h-12 mx-auto"
              />
              <h3 className="text-xl font-semibold">Economize de verdade</h3>
              <p className="text-white/70">
                Descontos de até 90%. Encontre o melhor preço antes de comprar!
              </p>
            </Card>

            <Card className="bg-card text-white p-6 text-center space-y-4">
              <img
                src="/icon-easy.png"
                alt="Facilidade"
                className="h-12 mx-auto"
              />
              <h3 className="text-xl font-semibold">Fácil de usar</h3>
              <p className="text-white/70">
                Instale e pronto! A extensão aparece automaticamente ao visitar
                uma página de jogo.
              </p>
            </Card>
          </div>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">Sobre o criador</h2>
          <Card className="bg-card max-w-2xl mx-auto text-white p-6">
            <CardContent className="space-y-2">
              <p>
                <strong>Nome:</strong> Demerson
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  target="_blank"
                  href="https://github.com/demershow"
                  className="text-primary hover:underline"
                >
                  @demershow
                </a>
              </p>
              <p>
                <strong>Email:</strong> demersontorres520@gmail.com
              </p>
              <p>
                <strong>Objetivo:</strong> Criar soluções simples e úteis para
                gamers como eu, que querem aproveitar ao máximo seus jogos sem
                gastar além da conta.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Rodapé */}
        <footer className="text-center text-white/50 mt-10 text-sm">
          © {new Date().getFullYear()} NoobPrice — Feito com ♥ por gamers, para
          gamers.
        </footer>
      </main>
    </div>
  );
}
