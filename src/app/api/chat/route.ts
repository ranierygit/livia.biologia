import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || 'dummy_key',
});

const SYSTEM_PROMPT = `Você é a "Bio IA" — assistente virtual especializada nos conteúdos ensinados pela professora Lívia Oliveira, licenciada em Ciências Biológicas. Você responde dúvidas de Biologia, Ciências e Química do Ensino Fundamental e Médio de forma didática, acessível e encorajadora. Use linguagem adequada ao nível do estudante, exemplos do cotidiano e, quando pertinente, mencione que o aluno pode contar com aulas presenciais personalizadas com a Professora Lívia em Garanhuns/PE. Não responda perguntas fora do escopo educacional de ciências naturais. Seja sempre gentil, paciente e motivador.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      // Mockup fallback
      return NextResponse.json({
        reply: "Oi! Eu sou a Bio IA. Como não tenho uma chave de API Anthropic configurada neste ambiente de demonstração, não posso processar sua dúvida agora. Sinta-se livre para entrar em contato diretamente com a professora Lívia!"
      });
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content
      }))
    });

    const replyText = (response.content[0] as any).text;

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Erro no chat API:", error);
    return NextResponse.json(
      { error: "Erro ao se conectar com a Bio IA." },
      { status: 500 }
    );
  }
}
