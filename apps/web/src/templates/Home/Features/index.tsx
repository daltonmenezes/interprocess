import { Title, Section, Description, FeatureCard } from './styles'

export function FeatureSection() {
  return (
    <Section>
      <FeatureCard>
        <Title>🚀 Best-in-class DX</Title>

        <Description>
          Interprocess has a <strong>fully-typed API</strong>, to minimize the
          learning curve, and provide{' '}
          <strong>the best possible developer experience</strong>.
        </Description>
      </FeatureCard>

      <FeatureCard>
        <Title>🧠 Enchanced API</Title>

        <Description>
          Interprocess is <strong>easy to create, manage processes</strong> and{' '}
          <strong>communicate between them</strong>. The provided{' '}
          <strong>API is clear, consistent and easy to understand</strong>.
        </Description>
      </FeatureCard>

      <FeatureCard>
        <Title>🔥 Type-safe and scalable</Title>

        <Description>
          Electron IPC is good, but difficult to maintain and scale, either
          because of the numerous channels you have to remember, or because of
          the inconsistent API between processes and the absence of inferred
          types of your channels and handlers. These are some of the things that{' '}
          <strong>interprocess</strong> <strong>comes to solve</strong>!
        </Description>
      </FeatureCard>

      <FeatureCard>
        <Title>🪄 Feature-rich</Title>

        <Description>
          Centralized IPC declarations is optional, you also can take advantage
          of the <strong>code splitting</strong> to have{' '}
          <strong>separated IPC declarations</strong> using features like{' '}
          <strong>createIpcSlice</strong>, <strong>combineIpcs</strong> and more
          helpful features!
        </Description>
      </FeatureCard>
    </Section>
  )
}
